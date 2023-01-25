import { Formik } from "formik";

const FormInput = ({ label, name, formik, type = "text" }) => {
    return (
        <div className=" flex flex-col items-center justify-center mt-5 border border-gray-400 rounded-md p-5 h-[40rem]">
            <div className="flex justify-between items-end w-full px-5 mx-5 my-5" >
                <label className="text-xl font-semibold text-gray-500 " htmlFor={name}>{label}</label>
                {formik.errors[name] && formik.touched[name] && (<span className="text-red-700">{formik.errors[name]}</span>)}

            </div>
            <input
                id={name}
                type={type}
                {...formik.getFieldProps(name)}
                name={name}
                className=' w-full py-2 p-5 my-52 border rounded-md'
            />
        </div >
    );
}

export default FormInput;