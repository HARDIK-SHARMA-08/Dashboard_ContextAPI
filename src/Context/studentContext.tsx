import React, { createContext, useContext, useEffect, useState } from "react";

interface Students {
    // id: number;
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    currAddress: string;
    permaAddress: string;
    email: string;
    gender: string;
}

interface StudentContextProps {
    students: Students[];
    setStudent: React.Dispatch<React.SetStateAction<Students[]>>;
}

const StudentContext = createContext<StudentContextProps>({
    students: [
        {
            // id: 0,
            firstName: "",
            lastName: "",
            age: 0,
            phoneNumber: 0,
            currAddress: "",
            permaAddress: "",
            gender: "",
            email: "",
        }
    ],
    setStudent: () => { },
});

export default function StudentStore({ children }: any) {
    const [students, setStudent] = useState<Students[]>(() => {
        const storedStudent = localStorage.getItem("StudentData")
        return storedStudent ? JSON.parse(storedStudent) : []
    });

    useEffect(()=>{
        localStorage.setItem("StudentData", JSON.stringify(students))
    },[students])

    return (
        <StudentContext.Provider value={{ students, setStudent }}>
            {children}
        </StudentContext.Provider>
    );
}

export function useStudentContext() {
    return useContext(StudentContext);
}
