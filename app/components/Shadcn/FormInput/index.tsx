import { FieldValues, Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import InputComponent from "../InputComponent";

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: keyof T & string;
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ComponentType<any>;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  icon,
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <InputComponent
              label={label}
              icon={icon}
              name={name}
              value={field.value}
              onChange={field.onChange}
              placeholder={placeholder}
              type={type}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
