import { type ReactNode, Fragment, useMemo, useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import Fuse from "fuse.js";

import Button from "@/components/Button";
import Search from "@/components/Search";

/** A search menu.
 * @component
 * Use this component when you have a list of options that you want to filter
 * using a search bar. The component will display a search bar and menu with
 * the search results. The menu is always visible.
 * @param options The list of options to filter.
 * @param onSelect A callback that is called when an option is selected.
 * @param fields The fields of the options that should be searched.
 * @param getOptionKey A function that returns a unique key for an option.
 * @param limit The maximum number of options to display in the menu.
 * @param static Whether the menu should be static or not. If the menu is
 * static, it will not be hidden when the user clicks outside of it.
 * @param autoFocus Whether the search bar should be focused when the component
 * is mounted.
 * @param renderOption A function that renders an option. Use this to customize
 * the appearance of the options.
 */
export default function SearchMenu<
  T extends {
    [key: string]: any;
  },
>({
  value,
  options,
  onSelect,
  renderOption,
  fields,
  getOptionKey = (_: T, index: number) => index,
  limit: initialLimit = 5,
  autoFocus = false,
  static: isStatic = true,
  displayValue,
  onChange,
  initialQuery = "",
  as = Search,
}: {
  options: T[];
  renderOption: (option: T) => ReactNode;
  as?: any;
  value?: T;
  onSelect?: (selected: T) => void;
  getOptionKey?: (option: T, index: number) => string | number;
  limit?: number;
  autoFocus?: boolean;
  fields: string[];
  static?: boolean;
  displayValue?: (value: T) => string;
  onChange?: (value: string) => void;
  initialQuery?: string;
}) {
  const [limit, setLimit] = useState(initialLimit);
  const [query, setQuery] = useState(initialQuery);

  // Call onChange when the query changes.
  useEffect(() => onChange?.(query), [query, onChange]);

  const fuse = useMemo(
    () =>
      new Fuse(options, {
        keys: fields,
        threshold: 0.3,
      }),
    [options, fields],
  );

  const filteredOptions = useMemo(() => {
    if (!query) return options.slice(0, limit);
    return fuse.search(query, { limit }).map((result) => result.item);
  }, [query, fuse, options, limit]);

  const optionsClassName =
    "w-full rounded-md border bg-stone-50 dark:bg-stone-700 border-stone-200 dark:border-stone-600 py-2 px-1 overflow-auto shadow-lg focus:outline-none";

  if (isStatic) {
    return (
      <Combobox value={value} onChange={onSelect}>
        {({ value, open }) => (
          <div className="relative">
            <Combobox.Input
              as={as}
              autoFocus={autoFocus}
              withButton={false}
              value={!open && value != null ? displayValue?.(value) : undefined}
              // @ts-ignore
              onChange={(value) => setQuery(value)}
            />
            <Combobox.Options
              static={isStatic}
              className={`absolute mt-1 ${optionsClassName}`}
            >
              <MenuContents
                options={filteredOptions}
                total={options.length}
                limit={limit}
                initialLimit={initialLimit}
                renderOption={renderOption}
                getOptionKey={getOptionKey}
                setLimit={setLimit}
              />
            </Combobox.Options>
          </div>
        )}
      </Combobox>
    );
  }

  return (
    <div className="flex flex-row w-full">
      <Combobox value={value} onChange={onSelect}>
        <Float
          offset={8}
          as="div"
          className="relative w-full"
          enter="transition duration-200 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
          placement="bottom"
          autoPlacement
          floatingAs={Fragment}
        >
          <div className="w-full">
            <Combobox.Input
              as={as}
              autoFocus={autoFocus}
              withButton={false}
              value={value != null ? displayValue?.(value) : undefined}
              // @ts-ignore
              onChange={(value) => setQuery(value)}
            />
          </div>
          <div className="w-full">
            <Combobox.Options className={`${optionsClassName}`}>
              <MenuContents
                options={filteredOptions}
                total={options.length}
                limit={limit}
                initialLimit={initialLimit}
                renderOption={renderOption}
                getOptionKey={getOptionKey}
                setLimit={setLimit}
              />
            </Combobox.Options>
          </div>
        </Float>
      </Combobox>
    </div>
  );
}

function MenuOption<T>({
  option,
  renderOption,
}: {
  option: T;
  renderOption: (option: T) => ReactNode;
}) {
  return (
    <Combobox.Option
      className={({ active }) =>
        `relative cursor-default select-none p-2 rounded-md ${
          active
            ? "bg-stone-200 dark:bg-stone-800 text-emerald-600 dark:text-emerald-500"
            : ""
        }`
      }
      value={option}
    >
      {renderOption(option)}
    </Combobox.Option>
  );
}

function MenuContents<T>({
  options,
  total,
  limit,
  initialLimit,
  renderOption,
  getOptionKey,
  setLimit,
}: {
  options: T[];
  total: number;
  limit: number;
  initialLimit: number;
  renderOption: (option: T) => ReactNode;
  getOptionKey: (option: T, index: number) => string | number;
  setLimit: (limit: number) => void;
}) {
  return (
    <>
      {/* Render the options, up to the limit */}
      {options.map((option, index) => (
        <MenuOption
          key={getOptionKey(option, index)}
          option={option}
          renderOption={renderOption}
        />
      ))}
      {/* If there are more options than the limit, show a Show All button */}
      {options.length == limit && total > options.length ? (
        <Button
          mode="text"
          className="w-full cursor-default"
          onClick={() => setLimit(total)}
        >
          <div className="flex flex-row w-full justify-between items-center text-stone-500">
            <span className="flex-grow text-left">Show all</span>
            <span>{total - options.length} more</span>
          </div>
        </Button>
      ) : options.length > initialLimit ? (
        <Button
          mode="text"
          className="w-full cursor-default"
          onClick={() => setLimit(initialLimit)}
        >
          <div className="flex flex-row w-full justify-between items-center text-stone-500">
            <span className="flex-grow text-left">Show less</span>
          </div>
        </Button>
      ) : null}
    </>
  );
}
