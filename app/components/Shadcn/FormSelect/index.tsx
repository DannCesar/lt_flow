import { Control, FieldValues } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "../ui/form";
import SelectComponent from "../SelectComponent";

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
}: FormSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <SelectComponent
            label={label}
              placeholder={placeholder}
              value={field.value}
              onValueChange={field.onChange}
              options={options}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
