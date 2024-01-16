import React from 'react'

const Detailinfo = ({ leftContent, rightContent }) => {
    return (
        <div className="flex justidy-start items-center gap-x-5">
            <p className="font-bold" style={{ width: "150px" }}>
                {leftContent}
            </p>
            <p>{rightContent}</p>
        </div>
    )
}

export default Detailinfo;