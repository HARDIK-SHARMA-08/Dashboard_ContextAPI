"use client";
import { useStudentContext } from "@/Context/studentContext";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface Form {
  // id: number;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  currAddress: string;
  permaAddress: string;
  email: string;
  gender: GenderEnum;
}

export default function CreateStudent({ onClose }: any) {
  const { register, handleSubmit } = useForm<Form>();
  const context = useStudentContext();
  const { students, setStudent } = context;

  console.log("User::", students);

  const onSubmit: SubmitHandler<Form> = (data) => {
    setStudent((prevStudents: any) => [...prevStudents, data]);
    console.log("Login::", data);
    localStorage.setItem('user', JSON.stringify(data))
    onClose((prev: boolean) => !prev);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6 p-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-neutral-900 dark:border-neutral-700 rounded-2xl">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex flex-row justify-between">
              <div>
                <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Hardik"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Sharma"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                  Age
                </label>
                <input
                  type="number"
                  {...register("age")}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="18-60"
                />
              </div>
              <div className="grow">
                <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-max p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                  Phone Number
                </label>
                <input
                  type="number"
                  {...register("phoneNumber")}

                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+91-99XXXXXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                Current Address
              </label>
              <input
                {...register("currAddress")}

                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">
                Permanent Address
              </label>
              <input
                {...register("permaAddress")}

                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="submit"
                className="bg-white text-black p-2 w-full rounded-lg font-bold uppercase"
              />
              <button
                className="border-white border-2 text-white p-2 w-full rounded-lg font-bold uppercase"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
