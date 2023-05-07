import type { LabelHTMLAttributes } from "react";

/**
/* Label for an input element.
/* @param props The props for the label.
/* @returns A label for an input.
*/
export default function InputLabel(
  props: LabelHTMLAttributes<HTMLLabelElement>
) {
  return (
    <label
      className="mb-2 block font-medium text-stone-600 dark:text-stone-400"
      {...props}
    />
  );
}