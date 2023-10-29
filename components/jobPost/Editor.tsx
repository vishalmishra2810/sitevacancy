import React from 'react';
import RichTextEditor, { EditorValue } from 'react-rte';

interface EditorProps {}

export const Editor: React.FC<EditorProps> = ({}) => {
    const [value, setValue] = React.useState<EditorValue>(RichTextEditor.createEmptyValue());
    return (
        <RichTextEditor
            onChange={(newValue) => {
                setValue(newValue);
            }}
            value={value}
            className='bg-white border min-h-[300px] border-gray-400 rounded mb-3 leading-tight focus:outline-none focus:border-gray-500'
            placeholder='Enter your job description here...'
        />
    );
};

export default Editor;
