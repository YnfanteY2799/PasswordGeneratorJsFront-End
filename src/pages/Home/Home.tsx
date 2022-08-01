import { ReactElement } from "react";
import { BeakerIcon } from "@heroicons/react/solid";

export default function Home(): ReactElement {
  return (
    <>
      <BeakerIcon className="h-25 w-25 text-primary" />
      HomePage
    </>
  );
}
