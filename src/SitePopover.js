import React from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";

function SitePopover(props) {
    const content = props.content;
    const panel = props.panel;
    const [openPopover, setOpenPopover] = React.useState(false);
    const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
    };

    return (
        <Popover placement='top' open={openPopover} handler={setOpenPopover}>
            <PopoverHandler {...triggers}>
                {content}
            </PopoverHandler>
            <PopoverContent {...triggers} className="rounded-none p-0">
                {panel}
            </PopoverContent>
        </Popover>
    )
}
export default SitePopover;