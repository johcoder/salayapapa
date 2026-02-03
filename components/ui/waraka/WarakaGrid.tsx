import WarakaCard from "./WarakaCard";
import { Waraka } from "@/data/waraka";
import { machapishoList } from "@/data/machapisho"
import MachapishoGrid from "@/components/ui/MachapishoGrid"
import { Separator } from "../separator";


type Props = {
  warakaList: Waraka[];
};

export default function WarakaGrid({ warakaList }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {warakaList.map((waraka, index) => (
        <WarakaCard key={index} waraka={waraka} />
      ))}
    </div>
  );
}

