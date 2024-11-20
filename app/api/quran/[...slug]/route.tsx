import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { existsSync } from "fs";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      slug: string[];
    };
  }
) {
  try {
    const [languageName, languageType, chapter] = params.slug;
    const languageFileDir = await readdir("app/api/quran/edition");

    const languageFilePick =
      languageType === "orignal"
        ? `array.ts`
        : languageType === "latin"
        ? `array_la.ts`
        : languageType === "latin-diacritical"
        ? `array_lad.ts`
        : `${languageType}`;
    const languageFile = languageFileDir.some((elem) => languageName == elem);
    const languageFileType = existsSync(
      `app/api/quran/edition/${languageName}/${languageFilePick}`
    );

    if (!languageFile || !languageFileType) {
      return NextResponse.json(
        {
          sucess: false,
          message: `No data available for the specified ${languageName} or ${languageType}`,
        },
        { status: 404 }
      );
    } else {
      const filePath = await import(
        `@/app/api/quran/edition/${languageName}/${languageFilePick}`
      );

      if (chapter) {
        const filteredData = filePath.apiArray.filter((elem: any) => {
          return elem.chapter === parseInt(chapter);
        });
        if (filteredData) {
          return NextResponse.json(filteredData, { status: 200 });
        }
        return NextResponse.json(
          {
            sucess: false,
            message: `No data available for the specified ${chapter} try 1 - 114`,
          },
          { status: 401 }
        );
      }

      return NextResponse.json(filePath.apiArray, { status: 200 });
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error. Please try again later.",
        error: error,
      },
      { status: 500 }
    );
  }
}
