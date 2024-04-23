'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import {useState} from "react";

interface DropDownOption {
    value: string;
    label: string;
}

interface Dropdown {
    label: string;
    options: DropDownOption[],
}

export function Dropdown(value: Dropdown) {
    const filterParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleFilter = useDebouncedCallback((term) => {
        const params = new URLSearchParams(filterParams);
        if (term) {
            params.set('filter', term);
        } else {
            params.delete('filter');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 100);
    return (
        <>
        <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="select">{value.label}</label>
            <select
                onChange = {(e) => {
                    handleFilter(e.target.value)
                }}
                defaultValue={filterParams.get('filter')?.toString()}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                {value.options.map((option, index) => {
                    const {value, label} = option;
                    return (
                        <option key={index} value={value}>{label}</option>
                    )
                })}
            </select>
        </>
    )
}