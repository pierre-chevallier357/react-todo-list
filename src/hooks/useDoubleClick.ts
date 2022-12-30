export default function useDoubleClick(
  onClick: Function | null,
  onDoubleClick: Function
) {
  let clicks: number[] = [];
  let timeout: NodeJS.Timeout;

  return (event: any, ...rest: any) => {
    clicks.push(new Date().getTime());

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (
        clicks.length > 1 &&
        clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250
      ) {
        if (onDoubleClick) {
          onDoubleClick(event, ...rest);
        }
      } else if (onClick) {
        onClick(event, ...rest);
      }
      clicks = [];
    }, 250);
  };
}
