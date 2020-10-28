class Htmlform(object):
    def __init__(self):
        pass
    def buildform(self,height,width,list_heng,list_shu):#height为列数，width为行数
        html = []
        html_txt = ''
        for i in range(height):
            html.append([])
            for j in range(width):
  #之后，下面行代码需要加合适ID以标记
                html[i].append('<td><textarea type="text" name="%s.%s" value="">'%(j,i))#(x,y)的形式
        for i in list_heng:
            x = i[0]
            y1 = i[1]
            y2 = i[3]
            rowspan = y2-y1+1
            html[y1][x] = '<td rowspan=%s><textarea type="text" name="%s.%s" value="">'%(rowspan,x,y1)
            for j in range(y2-y1):
                html[y1+j+1][x] = ' '
        for i in list_shu:
            y = i[1]
            x1 = i[0]
            x2 = i[2]
            colspan = x2-x1+1
            html[y][x1] = '<td colspan=%s><textarea type="text" name="%s.%s" value="">'%(colspan,x1,y)
            for j in range(x2-x1):
                html[y][x1+j+1] = ''
        for i in html:
            html_txt += '<tr>'
            for j in i:

                for k in j:    
                    html_txt += k
            html_txt += '</tr>'
        print(html)
        print(html_txt)
        return html
    def buildhtml(self,height,width,list_heng,list_shu):
        html_txt = '<!DOCTYPE HTML> <html> <style type=\'text/css\'> textarea{width:98%;overflow-x:visible;overflow-y:visible;} </style> <body> <table border=1>'
        print('1')
        html_txt += self.buildform(height,width,list_heng,list_shu)
        print('2')
        html_txt += '</table> <textarea type="submit" value="提交"> </body> </html>'
        f = open('test.html','w')
        f.write('%s'%(html_txt))
        f.close()
            


