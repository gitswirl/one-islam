// components/home/page.ts

"use client";
import React, { useEffect, useState } from "react";

// export let modData: any[] = [];

const Home: React.FC = () => {
  // const [verses, setVerses] = useState<any[]>([]);
  // if (verses.length > 0) {
  //   modData = verses;
  // }
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const url =
  //       "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/zul-iqembulezifundi.json";
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     // Group verses by chapter
  //     const groupedVerses = data.quran.reduce((acc: any, verse: any) => {
  //       const chapter = verse.chapter;
  //       if (!acc[chapter]) {
  //         acc[chapter] = {
  //           chapter: chapter,
  //           versesCount: 0,
  //           verses: [],
  //         };
  //       }
  //       acc[chapter].verses.push(verse.text);
  //       acc[chapter].versesCount += 1;
  //       return acc;
  //     }, {});
  //     const formattedVerses = Object.values(groupedVerses);
  //     setVerses(formattedVerses);
  //   };
  //   fetchApi();
  // }, []);

  // useEffect(() => {
  //   console.log(modData);
  // }, [verses]);

  // useEffect(() => {
  //   const postApi = async (verses: any[]) => {
  //     const url = "http://localhost:3000/api/quran";
  //     const res = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(verses),
  //       cache: "no-store",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-api-key": process.env.API_KEY || "",
  //       },
  //     });
  //     const data = await res.json();
  //     return data;
  //   };
  //   postApi(verses);
  // }, [verses]);

  return (
    <>
      <h1>quran api...</h1>
    </>
  );
};

export default Home;
