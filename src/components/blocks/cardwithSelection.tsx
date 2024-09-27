"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { RxCross1 as CloseIcon } from "react-icons/rx";

export function CardWithSelection({ setIsModalShowing }: any) {
  const card = {
    command: "Choose one",
    title: "What type of cars are you looking for?",
    option1: { title: "Pre-owned Cars", href: "/collection" },
    option2: { title: "New Cars", href: "/new-cars" },
  };
  return (
    <Card className="w-[350px] bg-black text-white">
      <CardHeader>
        <CardTitle className="text-3xl flex justify-between items-center pr-2">
          {card?.command}{" "}
          <CloseIcon
            className="h-6 w-6"
            onClick={() => {
              setIsModalShowing(false);
            }}
          />
        </CardTitle>
        <CardDescription className="text-2xl">{card?.title}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between gap-4">
        <Link className="w-full " href={card?.option1?.href}>
          <Button variant="selection">{card?.option1?.title}</Button>
        </Link>
        <Link className="w-full" href={card?.option2?.href}>
          <Button variant="selection">{card?.option2?.title}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
