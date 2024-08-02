import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

function getRelatedItems(viewItem, items) {
  const viewItemWordList = viewItem.name.split(" ");
  const firstWord = viewItemWordList[0].toLowerCase();
  const lastWord = viewItemWordList[viewItemWordList.length - 1].toLowerCase();

  let lastWordMatches = [];
  let firstWordMatches = [];
  let categoryMatches = [];

  items.forEach((item) => {
    const itemName = item.name.toLowerCase();
    if (itemName.includes(lastWord)) {
      lastWordMatches.push(item);
    } else if (itemName.includes(firstWord)) {
      firstWordMatches.push(item);
    } else if (item.category === viewItem.category) {
      categoryMatches.push(item);
    }
  });
  const relatedItems = [
    ...lastWordMatches,
    ...firstWordMatches,
    ...categoryMatches,
  ].filter((item) => item.id !== viewItem.id);

  return relatedItems;
}

function RelatedItems({ viewItem, items }) {
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const related = getRelatedItems(viewItem, items);
    setRelatedItems(related);
  }, [viewItem, items]);

  return (
    <div className="mt-2 pt-5 bg-white">
      <h2 className="text-xl sm:text-2xl  font-semibold mb-4 ml-2 sm:ml-10">Related Items</h2>
      <ItemList items={relatedItems} />
    </div>
  );
}

export default RelatedItems;
