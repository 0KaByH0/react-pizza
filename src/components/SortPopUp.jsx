import React from 'react';

import Container from '@material-ui/core/Container';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ListItem from '@material-ui/core/ListItem';

import { useStyles } from '../style';

const SortPopUp = React.memo(function SortPopUp({ items, onHandleSortClick, activeSort }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const popUpEl = React.useRef(null);

  function onHandleClick(e) {
    if (!e.path.includes(popUpEl.current)) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', onHandleClick);
    return () => {
      document.body.removeEventListener('click', onHandleClick);
    };
  }, []);

  const handleChange = (item) => {
    onHandleSortClick(item);
    setOpen(false);
  };

  return (
    <>
      <div ref={popUpEl}>
        <Container className={classes.orderLayoutWrapper}>
          <ArrowDropUpIcon style={{ fontSize: '30px' }} />
          <div>Сортировка по:&nbsp;</div>
          <span
            onClick={() => setOpen(!open)}
            style={{ color: '#fe5f1e', borderBottom: '1px dashed #fe5f1e', cursor: 'pointer' }}>
            {items && items.find((obj) => obj.type === activeSort).name}
          </span>
        </Container>

        {open && (
          <div className={classes.sortPopUpWrapper}>
            {items.map((item, index) => (
              <ListItem
                className={classes.sortPopUpItem}
                selected={activeSort === item.type ? true : false}
                key={`${item.name}_${index}`}
                button
                onClick={() => handleChange(item)}>
                {item.name}
              </ListItem>
            ))}
          </div>
        )}
      </div>
    </>
  );
});

export default SortPopUp;
