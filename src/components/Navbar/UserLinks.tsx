import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { logout } from "@/src/lib/features/auth/authOperations";

export default function UserLinks() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
    <div className="flex flex-col gap-4">
      <li className="hover:text-primary transition duration-200 ease-in-out">
        <Link href="/invoices">Invoices</Link>
      </li>
      <li className="hover:text-primary transition duration-200 ease-in-out">
        <Link href="/payments">Payments</Link>
      </li>
      <li className="hover:text-primary transition duration-200 ease-in-out">
        <Link href="/token">Tokens</Link>
      </li>

      <li className="text-red-medium hover:text-red-light transition duration-200 ease-in-out">
        <button onClick={handleLogout}>Log Out</button>
      </li>
      </div>
    </>
  );
}
