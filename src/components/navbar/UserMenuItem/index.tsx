"use client";

interface UserMenuItemProps {
    name: string;
    onClick: () => void;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({name, onClick}) => {
    return (
        <div onClick={onClick} className="text-lg py-2 px-3 hover:bg-gray-100 cursor-pointer">
            {name}
        </div>
    );
};

export default UserMenuItem;