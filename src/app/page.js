"use client";
import { MyLogo } from "@/components/my-logo";
import SwitchTheme from "@/components/switchtheme";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col justify-start items-center p-2">
      <div className="h-24 flex flex-row justify-center  items-center absolute gap-4 top-0 left-0 w-full">
        <MyLogo className="w-[28px]  " />
        <h2 className="text-slate-900 dark:text-slate-200 text-4xl ">
          https://Placidovenegas.dev
        </h2>
      </div>
      <div className="flex justify-center items-center w-screen h-screen absolute top-0 left-0">
        <h1 className="text-[600px] capitalize font-bold text-gray-800 dark:text-gray-200 opacity-20">
          {theme}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        <SwitchTheme />

        <h1 className="text-slate-900 dark:text-slate-200 text-4xl">
          ¡Voilà! Ahora puedes alternar entre el modo oscuro y claro. 🎉
        </h1>
      </div>
    </main>
  );
}
