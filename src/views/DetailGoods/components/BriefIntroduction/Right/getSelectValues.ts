//获取选中项的匹配数组
export function getSelectValues(specs: any) {
  const selectValues: any = [];
  specs.forEach((spec: any) => {
    const selected = spec.values.find((val: any) => val.selected);
    selectValues.push(selected ? selected.name : undefined);
  });
  return selectValues;
}
