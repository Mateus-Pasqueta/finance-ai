import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionsTypeBadgeProps {
  transaction: Transaction;
}

const TransactionsTypeBadge = ({ transaction }: TransactionsTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="hover:bg-ghost bg-danger bg-opacity-10 font-bold text-danger">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="hover:bg-ghost bg-white bg-opacity-10 font-bold text-white">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionsTypeBadge;
