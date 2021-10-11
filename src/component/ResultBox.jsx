import { useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";

const Resultbox = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <>
      <Box
        sx={{
          margin: "7rem 35rem",
          textAlign: "center",
          backdropFilter: "blur(29px) saturate(117%)",
          boxShadow: " 3px 4px 14px 0px #c99488",
          backgroundColor: " rgba(50, 50, 50, 0.08)",
          borderRadius: "7px",
          display: "flex",
          height: "9vh",
          justifyContent: "space-between",
          width: " 25%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            sx={{
              padding: " 2px 2px",
              margin: "10px 26px",
              background: "#fbbc97",
              boxShadow: "3px 3px 4px 0px #b7876b",
            }}
          >{` ${props.value !== null ? `${props.symbol}` : ""} `}</Avatar>

          <Chip
            sx={{
              borderRadius: " 4px",
              boxShadow: "3px 2px 4px 0px #c49376",
              margin: "15px -2px",
              border: "none",
              fontWeight: "700",
              fontSize: "14px",
              color: " #1e1e1e",
            }}
            label={props.inputValue}
            variant="outlined"
          />
        </Box>

        <CopyToClipboard text={props.emoji} onCopy={onCopyText}>
          <div className="copy-area">
            <Button color="success" sx={{ p: 0, m: 0 }}>
              {" "}
              <Tooltip title="Copy emoji">
                <Avatar
                  sx={{ bgcolor: green[500], margin: "12px 19px" }}
                  variant="rounded"
                >
                  <AssignmentIcon />
                </Avatar>
              </Tooltip>
            </Button>
          </div>
        </CopyToClipboard>
      </Box>
    </>
  );
};

export default Resultbox;
