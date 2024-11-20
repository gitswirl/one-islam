import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { QuranInfoArray } from "./quranInfo";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    let filteredData: any[] = QuranInfoArray;
    searchParams.forEach((value, key) => {
      filteredData = filteredData.filter(
        (el) =>
          el[key as keyof any[]] &&
          el[key as keyof any[]]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
      );
    });

    if (filteredData && filteredData.length > 0) {
      return NextResponse.json(filteredData, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, message: "No data found matching the criteria!" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred." },
      { status: 500 }
    );
  }
}
