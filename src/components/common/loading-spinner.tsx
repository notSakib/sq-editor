const LoadingSpinner = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div
      role="status"
      className="flex flex-col justify-center items-center gap-4"
    >
      <div className="flex space-x-2 justify-center items-center bg-transparent">
        <span className="sr-only">Loading...</span>
        <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s] ml-0"></div>
        <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
      </div>
      {children ? <div className="">{children}</div> : null}
    </div>
  );
};

export default LoadingSpinner;
