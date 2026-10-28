type DownloadItem = {
  label: string;
  format: string;
  note: string;
  href: string;
};

export function DownloadList({ items }: { items: readonly DownloadItem[] }) {
  return (
    <ul className="divide-y divide-primary/15 border border-primary/20">
      {items.map((item) => (
        <li
          key={item.href}
          className="flex flex-col gap-4 bg-surface-container px-5 py-6 sm:flex-row sm:items-center sm:px-6"
        >
          <div className="min-w-0 flex-1">
            <h3 className="font-headline-md text-xl uppercase text-on-surface">
              {item.label}
            </h3>
            <p className="mt-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
              {item.format}
            </p>
            <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
              {item.note}
            </p>
          </div>
          <a
            href={item.href}
            download
            className="inline-flex shrink-0 items-center justify-center self-start whitespace-nowrap border border-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest text-primary transition-colors hover:bg-primary/10 sm:self-center"
          >
            Download
          </a>
        </li>
      ))}
    </ul>
  );
}
