import { TextField, Tooltip } from '@mui/material';

const markupTooltip = (
  <>
    Стоимость рассчитывается так:<br />
    1. Для каждого продукта: <b>Вес продукта (г/шт/мл) × Стоимость за грамм</b><br />
    2. Все значения суммируются — так получается <b>себестоимость блюда</b>.<br />
    3. К себестоимости применяется наценка:<br />
    <b>Итоговая цена = Себестоимость × (1 + Процент наценки / 100)</b><br />
    Например, если себестоимость 200 UAH, а наценка 30%, итог будет 260 UAH.
  </>
);

export default function MarkupField({ value, onChange, error, helperText }) {
  return (
    <Tooltip title={markupTooltip}>
      <TextField label="Процент наценки" value={value} onChange={e => onChange(e.target.value)} error={error} helperText={helperText} fullWidth sx={{marginBottom: '16px' }} />
    </Tooltip>
  );
}
