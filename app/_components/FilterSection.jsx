import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Bath, BedDouble, CarFront } from 'lucide-react';

function FilterSection({ setBathCount, setBedCount, setParkingCount, setHomeType }) {
    return (
        <div className='px-3 py-2 flex flex-wrap gap-4'>
            {/* Bed Count Selector */}
            <div className='flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]'>
                <Select onValueChange={setBedCount}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Bed" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2">
                            <h2 className='flex gap-2'>
                                <BedDouble className='h-5 w-5 text-primary' /> 2+
                            </h2>
                        </SelectItem>
                        <SelectItem value="3">
                            <h2 className='flex gap-2'>
                                <BedDouble className='h-5 w-5 text-primary' /> 3+
                            </h2>
                        </SelectItem>
                        <SelectItem value="4">
                            <h2 className='flex gap-2'>
                                <BedDouble className='h-5 w-5 text-primary' /> 4+
                            </h2>
                        </SelectItem>
                        <SelectItem value="5">
                            <h2 className='flex gap-2'>
                                <BedDouble className='h-5 w-5 text-primary' /> 5+
                            </h2>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Bath Count Selector */}
            <div className='flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]'>
                <Select onValueChange={setBathCount}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Bath" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2">
                            <h2 className='flex gap-2'>
                                <Bath className='h-5 w-5 text-primary' /> 2+
                            </h2>
                        </SelectItem>
                        <SelectItem value="3">
                            <h2 className='flex gap-2'>
                                <Bath className='h-5 w-5 text-primary' /> 3+
                            </h2>
                        </SelectItem>
                        <SelectItem value="4">
                            <h2 className='flex gap-2'>
                                <Bath className='h-5 w-5 text-primary' /> 4+
                            </h2>
                        </SelectItem>
                        <SelectItem value="5">
                            <h2 className='flex gap-2'>
                                <Bath className='h-5 w-5 text-primary' /> 5+
                            </h2>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Parking Count Selector */}
            <div className='flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]'>
                <Select onValueChange={setParkingCount}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Parking" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1+">
                            <h2 className='flex gap-2'>
                                <CarFront className='h-5 w-5 text-primary' /> 1+
                            </h2>
                        </SelectItem>
                        <SelectItem value="2">
                            <h2 className='flex gap-2'>
                                <CarFront className='h-5 w-5 text-primary' /> 2+
                            </h2>
                        </SelectItem>
                        <SelectItem value="3">
                            <h2 className='flex gap-2'>
                                <CarFront className='h-5 w-5 text-primary' /> 3+
                            </h2>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Home Type Selector */}
            <div className='flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]'>
                <Select onValueChange={(value) => value === 'All' ? setHomeType(null) : setHomeType(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Home Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
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
