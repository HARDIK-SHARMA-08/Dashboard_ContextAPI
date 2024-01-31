"use client";
import { useUserContext } from "@/Context/profileContext";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Form {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  address: string;
}

export default function Page() {
  const { register, handleSubmit } = useForm<Form>();
  const context = useUserContext();
  const { user, setUser } = context;
  const router = useRouter();

  console.log("User::", user);

  const onSubmit: SubmitHandler<Form> = (data) => {
    setUser(data);
    console.log("Login::", data);
    router.push('/profile')
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
      <div className="text-bold text-4xl uppercase font-bold">sign up</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-2 items-center justify-between">
            <label>First Name</label>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-between">
            <label>Last Name</label>
            <input
              {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-between">
            <label>Age</label>
            <input
              type="number"
              {...register("age")}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-between">
            <label>Phone Number</label>
            <input
              type="number"
              {...register("phoneNumber")}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-between">
            <label>Address</label>
            <input
              {...register("address")}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <input
            type="submit"
            className="bg-white text-black p-2 w-full rounded-lg font-bold"
          />
        </div>
      </form>
    </div>
  );
}
