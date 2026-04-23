import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Bath, BedDouble, CarFront } from 'lucide-react';

const renderOption = (Icon, label) => (
    <div className='flex items-center gap-2'>
        <Icon className='h-5 w-5 text-primary' />
        <span>{label}</span>
    </div>
);

function FilterSection({ setBathCount, setBedCount, setParkingCount, setHomeType }) {
    return (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            <div>
                <Select onValueChange={(value) => setBedCount(value === 'any' ? 0 : value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Beds" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any beds</SelectItem>
                        <SelectItem value="2">
                            {renderOption(BedDouble, '2+')}
                        </SelectItem>
                        <SelectItem value="3">
                            {renderOption(BedDouble, '3+')}
                        </SelectItem>
                        <SelectItem value="4">
                            {renderOption(BedDouble, '4+')}
                        </SelectItem>
                        <SelectItem value="5">
                            {renderOption(BedDouble, '5+')}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select onValueChange={(value) => setBathCount(value === 'any' ? 0 : value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Baths" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any baths</SelectItem>
                        <SelectItem value="2">
                            {renderOption(Bath, '2+')}
                        </SelectItem>
                        <SelectItem value="3">
                            {renderOption(Bath, '3+')}
                        </SelectItem>
                        <SelectItem value="4">
                            {renderOption(Bath, '4+')}
                        </SelectItem>
                        <SelectItem value="5">
                            {renderOption(Bath, '5+')}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select onValueChange={(value) => setParkingCount(value === 'any' ? 0 : value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Parking" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any parking</SelectItem>
                        <SelectItem value="1">
                            {renderOption(CarFront, '1+')}
                        </SelectItem>
                        <SelectItem value="2">
                            {renderOption(CarFront, '2+')}
                        </SelectItem>
                        <SelectItem value="3">
                            {renderOption(CarFront, '3+')}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select onValueChange={(value) => value === 'all' ? setHomeType(null) : setHomeType(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Home Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All home types</SelectItem>
                        <SelectItem value="Single Family House">Single Family House</SelectItem>
                        <SelectItem value="Town House">Town House</SelectItem>
                        <SelectItem value="Condo">Condo</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}

export default FilterSection;
