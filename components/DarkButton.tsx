import { IS_BROWSER } from "$fresh/runtime.ts";

export function DarkButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            disabled={!IS_BROWSER || props.disabled}
            class="px-2 py-1 border(gray-100 2) dark:border(gray-900 2) hover:bg-gray-200 dark:hover:bg-gray-800"
        />
    );
}
