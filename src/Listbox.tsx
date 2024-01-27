import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptions as HeadlessListboxOptions,
  ListboxSelectedOption as HeadlessListboxSelectedOption,
  type ListboxOptionProps as HeadlessListboxOptionProps,
  type ListboxProps as HeadlessListboxProps,
} from '@headlessui/react'
import { Fragment } from 'react'

export function Listbox<T>({
  children: options,
  ...props
}: {
  children?: React.ReactNode
} & Omit<HeadlessListboxProps<typeof Fragment, T>, 'multiple'>) {
  return (
    <HeadlessListbox {...props} multiple={false}>
      <HeadlessListboxButton
        data-slot="control"
        className="group relative block w-full border"
      >
        <HeadlessListboxSelectedOption
          as="span"
          options={options}
        />
      </HeadlessListboxButton>
        <HeadlessListboxOptions
          as="div"
          anchor={{
            to: 'selection start',
          }}
          className="bg-red-500 border overflow-y-scroll"
        >
          {options}
        </HeadlessListboxOptions>
    </HeadlessListbox>
  )
}

export function ListboxOption<T>({
  children,
  ...props
}: { children?: React.ReactNode } & HeadlessListboxOptionProps<'div', T>) {
  return (
    <HeadlessListboxOption as={Fragment} {...props} className="bg-white">
      <div>{children}</div>
    </HeadlessListboxOption>
  )
}