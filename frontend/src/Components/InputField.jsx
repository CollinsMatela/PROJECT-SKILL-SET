
const InputField = ({ label, type, name, placeholder, error, value, onChange }) => {
    return(
    <div className="flex flex-col w-full">
                    <label htmlFor={name} className="mb-1 font-semibold text-gray-300">{label}</label>
                    <input type={type} 
                           name={name} 
                           id="" 
                           placeholder={placeholder}
                           className="bg-gray-100 h-12 w-full rounded-xl p-5 outline-0"
                           value={value}
                           onChange={onChange} 
                    />
                    <p className="text-sm"><span className="text-red-500">{error}</span></p>
    </div>
    );
}
export default InputField;