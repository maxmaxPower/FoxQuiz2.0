
export const arrayUpdateMapper = (itemLocation,itemId,objPropName,newObjProps) => {
    return itemLocation.map(u => {
      if (u[objPropName] === itemId) {
        return { ...u, ...newObjProps };
      }
      return u;
    });
  };