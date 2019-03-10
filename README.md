# use-properties-hook

bind variables to current Component, like **_class-properties_**

## install

```
npm install @marvelsq/use-properties-hook
```

## use
- **useProperty(any):any** bind single variable
- **useProperties(...any):[...any]** bind multiple variable
```js
import React, { useState } from 'react';
import { useProperties } from '@marvelsq/use-properties-hook';

export default function App({ data, updateData }) {
  // state
  const [active, setActive] = useState(null);
  // functions always same
  const [handleClick, handleRemove] = useProperties(
    index => setActive(index),
    targetIndex => {
      updateData(data.filter((data, index) => targetIndex !== index));
      setActive(data[index - 1] ? index - 1 : null);
    }
  );

  return <Table data={data} onClick={handleClick} onRemove={handleRemove} />;
}
```

**inspired by [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)**
