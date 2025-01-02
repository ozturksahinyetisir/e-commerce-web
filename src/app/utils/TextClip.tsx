

const TextClip = (text: string) => {
    if(text.length > 20) return text.substring(0, 20) + "..."
    else {
      return text
    }
    }
export default TextClip