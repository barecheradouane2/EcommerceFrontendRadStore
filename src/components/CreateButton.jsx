function CreateButton({ setShowModal ,children}) {
    return (
        <button
        onClick={() => setShowModal(true)}
        className=" cursor-pointer  bg-second-100 text-black font-semibold py-1 px-4 rounded-full"
      >
        + {children}
      </button>
    )
}

export default CreateButton
