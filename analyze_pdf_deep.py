import PyPDF2

pdf_path = 'public/reforma_enviar.pdf'

try:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        total_pages = len(reader.pages)
        print(f"Total pages: {total_pages}")
        
        has_text_anywhere = False
        empty_candidates = []

        for i in range(total_pages):
            page = reader.pages[i]
            text = page.extract_text()
            
            # Check for resources (images, etc)
            resources = page.get('/Resources', {})
            xobjects = resources.get('/XObject', {})
            
            content_length = 0
            if page.get_contents():
                 # Rough check of content stream size
                 content_length = len(page.get_contents().get_data())

            has_text = len(text.strip()) > 0
            if has_text:
                has_text_anywhere = True
            
            # If no text and no images/xobjects, precise check
            is_likely_blank = (not has_text) and (len(xobjects) == 0)
            
            if is_likely_blank:
               empty_candidates.append(i+1)
            
            if i % 20 == 0:
                print(f"Page {i+1}: Text={len(text)} chars, XObjects={len(xobjects)}, ContentStream={content_length} bytes")

        print(f"Has text anywhere: {has_text_anywhere}")
        print(f"Empty candidates (no text, no XObjects): {empty_candidates}")

except Exception as e:
    print(f"Error: {e}")
