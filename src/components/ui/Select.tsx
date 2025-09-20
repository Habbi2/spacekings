"use client";
import { useEffect, useRef, useState } from 'react';

type Option = { label: string; value: string; disabled?: boolean };

type Props = {
  name: string;
  options: Option[];
  defaultValue?: string;
  className?: string;
};

export default function Select({ name, options, defaultValue, className }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options.find(o => !o.disabled)?.value ?? '');
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, options.findIndex(o => o.value === value)));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    setActiveIndex(Math.max(0, options.findIndex(o => o.value === value)));
  }, [value, options]);

  const current = options.find(o => o.value === value);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      let idx = activeIndex;
      for (let i = 0; i < options.length; i++) {
        idx = (idx + dir + options.length) % options.length;
        if (!options[idx].disabled) break;
      }
      setActiveIndex(idx);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt && !opt.disabled) {
        setValue(opt.value);
        setOpen(false);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div ref={ref} className={className} onKeyDown={onKeyDown}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-left flex items-center justify-between gap-2 focus:outline-none focus:border-primary"
      >
        <span>{current?.label}</span>
        <svg className={`size-4 transition ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
      </button>
      {open && (
        <ul role="listbox" className="mt-2 max-h-60 overflow-auto rounded-xl border border-white/10 bg-[#0e1420] shadow-xl">
          {options.map((o, i) => (
            <li key={o.value} aria-selected={o.value === value}
                className={`px-4 py-2 cursor-pointer ${o.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/[0.06]'} ${i===activeIndex ? 'bg-white/[0.08]' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => { if (!o.disabled) { setValue(o.value); setOpen(false); } }}>
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
