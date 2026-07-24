import {
  makeStyles,
  TabList,
  Tab,
  type SelectTabData,
  type SelectTabEvent,
} from "@fluentui/react-components";

// A Fluent horizontal TabList used as the insights list filter. The selected
// Tab draws the brand-red underline indicator; a full-width hairline sits under
// the row. Values are the filter labels themselves.
const useStyles = makeStyles({
  tablist: { borderBottom: "1px solid var(--maq-border)" },
});

interface InsightsFilterBarProps {
  items: string[];
  active: string;
  onChange: (value: string) => void;
}

export function InsightsFilterBar({ items, active, onChange }: InsightsFilterBarProps) {
  const s = useStyles();
  return (
    <TabList
      className={s.tablist}
      size="large"
      selectedValue={active}
      onTabSelect={(_: SelectTabEvent, data: SelectTabData) =>
        onChange(data.value as string)
      }
      aria-label="Filter"
    >
      {items.map((item) => (
        <Tab key={item} value={item}>
          {item}
        </Tab>
      ))}
    </TabList>
  );
}
