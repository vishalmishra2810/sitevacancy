import SelectOption from '@/common/selectOption/SelectOption';
import React from 'react';

function LeftSideBar() {
    return (
        <div className="flex w-[200px] flex-col gap-[32px]">
            <SelectOption title="Job Type" options={['Full Time', 'Part Time', 'Contract', 'Internship']} />
            <SelectOption title="Job Type" options={['Full Time', 'Part Time', 'Contract', 'Internship']} />
            <SelectOption title="Job Type" options={['Full Time', 'Part Time', 'Contract', 'Internship']} />
        </div>
    );
}

export default LeftSideBar;
