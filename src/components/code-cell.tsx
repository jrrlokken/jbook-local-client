import { useState } from 'react';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const handleClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      <div>
        <button
          className="button button-submit is-primary is-small"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
