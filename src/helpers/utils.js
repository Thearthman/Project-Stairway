const slugify = require("@sindresorhus/slugify");

function headerToId(heading) {
    var slugifiedHeader = slugify(heading);
    if(!slugifiedHeader){
        return heading;
    }
    return slugifiedHeader;
}

function namedHeadings(md, state) {

    var ids = {}

    state.tokens.forEach(function(token, i) {
        if (token.type === 'heading_open') {
            var text = inlineText(state.tokens[i + 1]);
            var id = headerToId(text);
            var uniqId = uncollide(ids, id)
            ids[uniqId] = true
            setAttr(token, 'id', uniqId)
        }
    })
}

// Collect the plain text of an inline token (heading contents) without any
// markdown/HTML markup, so the generated id matches the anchors produced by
// headerToId() for [[note#heading]] links.
function inlineText(token) {
    if (!token) return "";
    if (!token.children || token.children.length === 0) {
        return token.content || "";
    }
    var text = "";
    token.children.forEach(function(child) {
        switch (child.type) {
            case "text":
            case "code_inline":
            case "image":
                text += child.content || "";
                break;
            case "softbreak":
            case "hardbreak":
                text += " ";
                break;
            default:
                if (child.children && child.children.length) {
                    text += inlineText(child);
                }
        }
    });
    return text;
}

function uncollide(ids, id) {
    if (!ids[id]) return id
    var i = 1
    while (ids[id + '-' + i]) { i++ }
    return id + '-' + i
}

function setAttr(token, attr, value, options) {
    var idx = token.attrIndex(attr)

    if (idx === -1) {
        token.attrPush([attr, value])
    } else if (options && options.append) {
        token.attrs[idx][1] =
            token.attrs[idx][1] + ' ' + value
    } else {
        token.attrs[idx][1] = value
    }
}

//https://github.com/rstacruz/markdown-it-named-headings/blob/master/index.js
exports.namedHeadingsFilter = function (md, options) {
    md.core.ruler.push('named_headings', namedHeadings.bind(null, md));
}

exports.headerToId = headerToId;
