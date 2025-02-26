
import CreateButton from "./CreateButton";
import ShowLengthButton from "./ShowLengthButton";

function AdminPageHeader({Title,setShowModal ,ShowLengthButtonInfo,CreateButtonInfo}) {
    return (
        <div>
        <dir className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-semibold">{Title}</h1>

            <ShowLengthButton>
              {ShowLengthButtonInfo } {Title}
            </ShowLengthButton>
          
          </div>
  
          <div>
          

            <CreateButton>
            {CreateButtonInfo}
            </CreateButton>
          </div>
        </dir>
      </div>
    )
}

export default AdminPageHeader
