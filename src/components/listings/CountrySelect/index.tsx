"use client";
import React from 'react';
import Countries from "world-countries";
import Select from "react-select";

export const getCountries = Countries?.map(countries => {
    return {
        name: countries.name.common,
        flag: countries.flag,
        lating: countries.latlng
    }
})

interface CountrySelectProps {
    value?: string | any;
    onChange: (value: any) => void
}

const options: any = getCountries.map(country => ({value: country.name, label: country.name, flag: country.flag}))

const CountrySelect: React.FC<CountrySelectProps> = ({onChange, value}) => {
    return (
        <Select
            placeholder="Select Country"
            options={options}
            isClearable
            value={value}
            onChange={value => onChange(value)}
            isSearchable
            formatOptionLabel={(val: any) => (
                <div className="flex items-center gap-2">
                    {val.flag} {val.value}
                </div>
            )}
        />
    );
};

export default CountrySelect;
