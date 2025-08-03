import type React from "react";

type CardProps = {
    id: number
    icon: React.ReactNode
    title: string
    description: string
}

export default function Card({id, icon, title, description}: CardProps) {
  return (
    <div className="cursor-default">
      <header>
        <div key={id} className="py-1 flex flex-row gap-2 items-center justify-center bg-[#ff6600] text-white rounded-sm ">
          <span>{icon}</span>
          <p>{title}</p>
        </div>
      </header>
      <div className="flex flex-col p-2">
        <p className="text-xs text-gray-800 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
}
