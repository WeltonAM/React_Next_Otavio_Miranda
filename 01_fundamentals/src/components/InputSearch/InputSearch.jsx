import './InputSearchStyle.css';

export const InputSearch = ({ type, handleChange, searchValue, placeholder }) => {
    return (
        <input
            type={type}
            onChange={handleChange}
            value={searchValue}
            placeholder={placeholder}
        />
    )
}
