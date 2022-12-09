import React, { useCallback, useMemo } from "react";

const FileTag = props => {
    const { fileType = "" } = props;

    const getTagType = useCallback(fileType => {
        const types = fileType.split("/");
        const type = types[types.length - 1];
        return type;
    }, []);

    const getTagColor = useCallback(
        fileType => {
            const type = getTagType(fileType);
            switch (type.toLowerCase()) {
                case "javascript":
                case "js":
                    return "bg-yellow-500";
                case "csv":
                    return "bg-blue-500";
                case "py":
                case "python":
                    return "bg-green-500";
                case "json":
                    return "bg-pink-500";
                default:
                    return "bg-gray-900";
            }
        },
        [getTagType]
    );

    const tagColor = useMemo(() => {
        return getTagColor(fileType);
    }, [fileType, getTagColor]);

    const tagType = useMemo(() => {
        return getTagType(fileType);
    }, [fileType, getTagType]);

    return (
        <div
            className={`border-solid rounded inline p-2 text-white font-semibold ${tagColor}`}
        >
            {tagType}
        </div>
    );
};

export default React.memo(FileTag);
