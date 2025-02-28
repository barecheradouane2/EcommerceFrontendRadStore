function Avatar({id,url,name}) {
  return (
    <div>
      <img
        key={id} // Move key to the outermost element
        className="cursor-pointer inline-block size-10 rounded-full ring-2 ring-white"
        src={url}
        alt={name} // Add an alt text for accessibility
      />
    </div>
  );
}

export default Avatar;
