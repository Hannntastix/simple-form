import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
  <div className="p-4 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold">Form Pengaduan</h1>
    <p>Please fill the form below</p>

    <Form />
  </div>
);
}
