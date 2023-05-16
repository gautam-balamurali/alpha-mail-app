import { inputFieldFilters } from "../../../config/app-config";
import { useMailbox } from "../../../core/contexts/MailboxContext";
import InputField from "../../shared/input-field-component/InputField";

const Filters = () => {
  const {
    checkboxFilters,
    searchFilters,
    currentMailbox,
    handleCheckboxFiltersOnChange,
    handleSearchFiltersOnChange,
  } = useMailbox();

  return (
    <div className="filter-section">
      <fieldset style={{ textAlign: "start" }}>
        <legend>
          <span className="material-symbols-outlined">filter_alt</span>
          Filters
        </legend>
        {inputFieldFilters.map(({ type, value, label, placeholder }) => (
          <div
            key={value + type}
            className={
              type === "checkbox" ? "checkbox-filter-style" : "filter-style"
            }
          >
            <InputField
              type={type}
              value={
                type === "checkbox" ? value : searchFilters[currentMailbox]
              }
              label={label}
              name={currentMailbox}
              onChangeFunction={
                type === "checkbox"
                  ? handleCheckboxFiltersOnChange
                  : handleSearchFiltersOnChange
              }
              checked={checkboxFilters[currentMailbox].includes(value)}
              placeholder={placeholder}
            />
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default Filters;
