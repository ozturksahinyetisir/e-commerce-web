import { toast } from "react-hot-toast";

export default function TestButton() {
  return (
    <button
      onClick={() => toast.success("Bu bir test mesajıdır!")}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Toast Gönder
    </button>
  );
}
